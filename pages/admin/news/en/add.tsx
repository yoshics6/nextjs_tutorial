import Layout from "@/components/admin/Layout/Layout";
import withAuth from "@/components/admin/withAuth";
import React, { useRef } from "react";
import Box from "@mui/material/Box";
import { TextField as TextFieldInput } from "formik-material-ui";
import { Field, Form, Formik, FormikProps } from "formik";
import { Button, Card, CardContent, CardActions } from "@mui/material";
import Typography from "@mui/material/Typography";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { Editor } from "@tinymce/tinymce-react";
import { productImageURL, getBase64 } from "@/utils/commonUtil";
import axios from "axios";
import Swal from "sweetalert2";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import dayjs, { Dayjs } from "dayjs";
import { appDispatch, appSelector } from "@/store/hooks";
import { addNewsEN } from "@/features/admin/news";
import router from "next/router";
const initialValues: any = {
  post_date: dayjs(),
  topic: "",
  detail: "",
  status: "Publish",
};

function Add() {
  const dispatch = appDispatch();
  const editorRef = useRef<any>(null);
  const [status, setStatus] = React.useState<String>("Publish");
  const [date, setDate] = React.useState<Dayjs | null>(dayjs());
  const showForm = ({ values, setFieldValue, isValid }: FormikProps<any>) => {
    return (
      <Form>
        <Card>
          <CardContent sx={{ padding: 4 }}>
            <Typography gutterBottom variant="h4">
              Add News EN
            </Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <MobileDatePicker
                label="Post Date"
                format="YYYY-MM-DD"
                value={date}
                onChange={(newValue: any) => {
                  console.log(newValue);
                  setDate(newValue);
                }}
                sx={{width: "100%"}}
              />
            </LocalizationProvider>
            <br />
            <br />
            <Field
              fullWidth
              component={TextFieldInput}
              name="topic"
              type="text"
              label="Topic"
            />
            <br />
            <br />
            <Field
              name="status"
              style={{ marginTop: 16 }}
              component={() => (
                <FormControl fullWidth>
                  <InputLabel>Status</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Status"
                    onChange={(e: any) => {
                      setStatus(e.target.value);
                    }}
                    value={status}
                    fullWidth
                  >
                    <MenuItem value="Publish">Publish</MenuItem>
                    <MenuItem value="Draft">Draft</MenuItem>
                  </Select>
                </FormControl>
              )}
            />
            <br />
            <br />
            <Editor
              apiKey="2s0w71caf8mc5dpcr17pwapuu74ko8mkivvenvzdmvnqyjti"
              onInit={(evt, editor) => (editorRef.current = editor)}
              initialValue=""
              init={{
                height: 750,
                menubar: true,
                automatic_uploads: false,
                file_picker_callback: function (cb, value, meta) {
                  var input = document.createElement("input");
                  input.setAttribute("type", "file");
                  input.setAttribute("accept", "image/*, video/*");

                  input.onchange = async function (e: any) {
                    var file = e.target.files[0];
                    var filename = file.name;
                    var reader = new FileReader();
                    reader.onload = function (event: any) {
                      var imagevalue = event.target.result;
                      fetch(imagevalue)
                        .then((res) => res.blob())
                        .then(async (blob) => {
                          var formData = new FormData();
                          formData.append("file", blob, filename);
                          var urlupload =
                            process.env.NEXT_PUBLIC_BASE_URL_ADMIN_API;
                          const response: any = await axios.post(
                            `${urlupload}/tinyupload`,
                            formData
                          );
                          cb(response.data.location, {
                            alt: response.data.alt,
                          });
                        });
                    };
                    reader.readAsDataURL(file);
                    // var file = e.target.files[0];
                    // var formData;
                    // formData = new FormData();
                    // // formData.append("file", file);
                    // const config = {
                    //   headers: {
                    //     "content-type": "multipart/form-data",
                    //   },
                    // };
                    // formData.append("file", file, "image");
                    // var urlupload = process.env.NEXT_PUBLIC_BASE_URL_ADMIN_API;
                    // const response: any = await axios.post(
                    //   `${urlupload}/tinyupload`,
                    //   formData,
                    //   config
                    // );
                    // cb(productImageURL("tinyupload", response.data.location), {
                    //   alt: response.data.alt,
                    // });
                  };
                  input.click();
                },
                plugins: "link image textpattern lists table preview media",
                toolbar:
                  " undo redo preview | formatselect | Link | image media | table | " +
                  "bold italic backcolor | alignleft aligncenter " +
                  "alignright alignjustify | bullist numlist outdent indent | " +
                  "removeformat",
                content_style:
                  "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
              }}
            />
          </CardContent>
          <CardActions>
            <Button
              disabled={!isValid}
              fullWidth
              variant="contained"
              color="primary"
              type="submit"
              sx={{ marginRight: 1 }}
            >
              Save
            </Button>

            <Button
              variant="contained"
              color="error"
              fullWidth
              onClick={() => router.push("/admin/news/en")}
            >
              Cancel
            </Button>
          </CardActions>
        </Card>
      </Form>
    );
  };

  return (
    <Layout>
      <Box>
        <Box
          sx={{
            width: "100%",
            maxWidth: "100%",
          }}
        >
          <Formik
            validate={(values) => {
              let errors: any = {};
              if (!values.post_date) errors.post_date = "Enter Post Date";
              if (!values.topic) errors.topic = "Enter Topic";
              if (!values.status) errors.status = "Enter Status";
              return errors;
            }}
            initialValues={initialValues}
            onSubmit={async (values, { setSubmitting }) => {
              let data = new FormData();
              const value_date = dayjs(date, "YYYY-MM-DD").toDate();
              let day: any = value_date.getDate();
              let month: any = value_date.getMonth() + 1;
              if (month <= 9) {
                month = "0" + month;
              }
              if (day <= 9) {
                day = "0" + day;
              }
              const year = value_date.getFullYear();
              const post_date = year + "-" + month + "-" + day;
              data.append("post_date", post_date);
              data.append("topic", values.topic);
              data.append("status", String(status));
              if (editorRef.current) {
                data.append("detail", editorRef.current.getContent());
              } else {
                data.append("detail", "");
              }

              dispatch(addNewsEN(data)).then((result: any) => {
                if (result.payload.data.status == "success") {
                  Swal.fire(
                    "Success!",
                    "Your data has been added",
                    "success"
                  ).then(function () {
                    router.push("/admin/news/en");
                  });
                } else {
                  Swal.fire("Error!", "Please check your input", "error").then(
                    function () {
                      return false;
                    }
                  );
                }
              });

              setSubmitting(false);
            }}
          >
            {(props) => showForm(props)}
          </Formik>
        </Box>
      </Box>
    </Layout>
  );
}

export default withAuth(Add);
