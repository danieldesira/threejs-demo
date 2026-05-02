import { Form, redirect } from "react-router";
import { Button } from "~/controls/button";
import { TextInput } from "~/controls/text-input";
import type { ActionFunctionArgs } from "react-router";
import useAuthenticationStore from "~/store";

export const clientAction = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  if (
    email === import.meta.env.VITE_LOGIN_EMAIL &&
    password === import.meta.env.VITE_LOGIN_PASSWORD
  ) {
    useAuthenticationStore
      .getState()
      .setAuthModel({ token: "", userEmail: email ?? "" });
    return redirect("/");
  }
};

export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <header className="text-2xl font-bold">Login</header>
      <Form method="post" action="" className="flex flex-col gap-2">
        <TextInput label="Email" id="email" type="email" />
        <TextInput label="Password" id="password" type="password" />
        <Button label="Login" />
      </Form>
    </div>
  );
}
