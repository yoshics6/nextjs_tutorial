import React from "react";
import { useSelector } from "react-redux";
import Router, { useRouter } from "next/router";
import { appSelector, appDispatch } from "@/store/hooks";
import { getSession } from "@/features/admin/login";

const withAuthFront = (WrappedComponent: React.FC) => (props: any) => {
  const router = useRouter();
  const { route } = router;
  const { data, isAuthenticated, isAuthenticating } = appSelector(
    (state: any) => state.login
  );
  const dispatch = appDispatch();
  // is fetching session (eg. show spinner)
  if (isAuthenticating) {
    dispatch(getSession());
    return null;
  }
  // If user is not logged in, return login component
  if (!isAuthenticated) {
    router.push(`/login`);
    return null;
  }
  // else {
  //   if (isAuthenticated) {
  //     router.push(`/admin/banner`); // default page after login
  //     return null;
  //   }
  // }

  // if (route == "/admin") {
  //   if (isAuthenticated) {
  //     router.push(`/admin/banner`);
  //     return null;
  //   } else {
  //     router.push(`/admin/login`);
  //     return null;
  //   }
  // }
  // If user is logged in, return original component
  return <WrappedComponent {...props} />;

  return null;
};

export default withAuthFront;
