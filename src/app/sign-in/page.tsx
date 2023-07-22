"use client";
import { FormEvent, useState } from "react";
import { useSignUp } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import Form from "@/app/(site)/components/contact/Form";
import Input from "@/components/Input";

type User = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
};

const RegisterPage = () => {
  const { isLoaded, signUp, setActive } = useSignUp();

  const [userData, setUserData] = useState<User>({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const { firstname, lastname, email, password } = userData;

  const [pendingVerification, setPendingVerification] = useState(false);
  const [code, setCode] = useState("");
  const router = useRouter();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Form Submit
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!isLoaded) {
      return;
    }

    try {
      await signUp.create({
        firstName: firstname,
        lastName: lastname,
        emailAddress: email,
        password,
      });

      // send the email.
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

      // change the UI to our pending section.
      setPendingVerification(true);
    } catch (err) {
      console.error(err);
    }
  };

  // Verify User Email Code
  const onPressVerify = async (e: FormEvent) => {
    e.preventDefault();
    if (!isLoaded) {
      return;
    }

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });
      if (completeSignUp.status !== "complete") {
        /*  investigate the response, to see if there was an error
         or if the user needs to complete more steps.*/
        console.log(JSON.stringify(completeSignUp, null, 2));
      }
      if (completeSignUp.status === "complete") {
        await setActive({ session: completeSignUp.createdSessionId });
        router.push("/admin");
      }
    } catch (err) {
      console.error(JSON.stringify(err, null, 2));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="border p-5 rounded" style={{ width: "500px" }}>
        <h1 className="text-2xl mb-4">Register</h1>
        {!pendingVerification && (
          <Form onSubmit={handleSubmit}>
            <div className="flex gap-[10px]">
              <Input
                name="firstname"
                value={firstname}
                onChange={handleChange}
                placeholder="Firstname"
              />
              <Input
                name="lastname"
                value={lastname}
                onChange={handleChange}
                placeholder="Lastname"
              />
            </div>
            <Input
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="Email address"
            />
            <Input
              name="password"
              value={password}
              onChange={handleChange}
              placeholder="Password"
              type="password"
            />
            <button
              type="submit"
              className="w-full text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Create an account
            </button>
          </Form>
        )}
        {pendingVerification && (
          <div>
            <Form className="space-y-4 md:space-y-6">
              <Input
                name="code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="code here"
              />
              <button
                type="submit"
                onClick={onPressVerify}
                className="w-full text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Verify Email
              </button>
            </Form>
          </div>
        )}
      </div>
    </div>
  );
};

export default RegisterPage;
