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
import Swal from "sweetalert2";
import dayjs, { Dayjs } from "dayjs";
import { appDispatch, appSelector } from "@/store/hooks";
import { addSaddle, getCoverPaper } from "@/features/admin/saddle_stitch";
import router from "next/router";

const initialValues: any = {
  s_type: "",
  s_finished_size: "",
  s_cover: "",
  s_text: "",
  s_cover_paper: "",
  s_text_paper: "",
  s_printing: "",
  s_cover_coating: "",
  s_text_coating: "",
  s_1000: 0,
  s_2000: 0,
  s_3000: 0,
  s_4000: 0,
  s_5000: 0,
};

function Add() {
  const dispatch = appDispatch();
  const { data } = appSelector((state) => state.saddle_stitch);
  const editorRef = useRef<any>(null);
  const [finished_size, setFinishedSize] = React.useState<String>("");
  const [cover, setCover] = React.useState<String>("");
  const [level, setLevel] = React.useState<String>("Administrator");
  const [level1, setLevel1] = React.useState<String>("");
  React.useEffect(() => {
    dispatch(getCoverPaper("get"));
  }, [dispatch]);

  var rows: any = data ?? [];
  
  const showForm = ({ values, setFieldValue, isValid }: FormikProps<any>) => {
    return (
      <Form>
        <Card>
          <CardContent sx={{ padding: 4 }}>
            <Typography gutterBottom variant="h4">
              Add Printing
            </Typography>

            <Field
              fullWidth
              component={TextFieldInput}
              name="s_type"
              type="text"
              label="Type"
            />
            <br />
            <br />
            <Field
              name="s_finished_size"
              style={{ marginTop: 20 }}
              component={() => (
                <FormControl fullWidth>
                  <InputLabel>Finished Size</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Finished Size"
                    onChange={(e: any) => {
                      setFinishedSize(e.target.value);
                    }}
                    value={finished_size}
                    fullWidth
                  >
                    <MenuItem value="A4">A4</MenuItem>
                    <MenuItem value="B5">B5</MenuItem>
                  </Select>
                </FormControl>
              )}
            />
            <br />
            <br />
            <Field
              name="sadd_cover"
              style={{ marginTop: 16 }}
              component={() => (
                <FormControl fullWidth>
                  <InputLabel>Cover</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Status"
                    onChange={(e: any) => {
                      setCover(e.target.value);
                    }}
                    value={cover}
                    fullWidth
                  >
                    <MenuItem value="4">4</MenuItem>
                  </Select>
                </FormControl>
              )}
            />
            <br />
            <br />
            <Field
              name="sadd_cover"
              style={{ marginTop: 16 }}
              component={() => (
                <FormControl fullWidth>
                  <InputLabel>Cover</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Status"
                    onChange={(e: any) => {
                      setLevel1(e.target.value);
                    }}
                    value={level1}
                    fullWidth
                  >
                    {rows.length > 0
                      ? rows.map((value: any) => (
                          <MenuItem value={value.cp_id}>
                            {value.cp_name}
                          </MenuItem>
                      ))
                      : ""}
                  </Select>
                </FormControl>
              )}
            />
            <br />
            <br />
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
              onClick={() => router.push("/admin/printing")}
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
              if (!values.name) errors.name = "Enter Name";
              // if (!values.password) errors.password = "Enter Password";
              // if (!values.fullname) errors.fullname = "Enter Fullname";
              // if (!values.email) errors.email = "Enter Email";
              // if (!values.status) errors.status = "Enter Status";
              // if (!values.level) errors.level = "Enter Role";
              return errors;
            }}
            initialValues={initialValues}
            onSubmit={async (values, { setSubmitting }) => {
              let data = new FormData();
              data.append("name", values.name);
              // data.append("password", values.password);
              // data.append("fullname", values.fullname);
              // data.append("email", values.email);
              // data.append("status", "active");
              // data.append("level", String(level));
              dispatch(addSaddle(data)).then((result: any) => {
                if (result.payload.data.status == "success") {
                  Swal.fire(
                    "Success!",
                    "Your data has been added",
                    "success"
                  ).then(function () {
                    router.push("/admin/printing");
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
