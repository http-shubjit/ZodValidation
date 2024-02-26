// RegistrationForm.tsx

import React from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import * as styled from "./roomregister.style";

const schema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
});

type FormData = z.infer<typeof schema>;

const RegistrationForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      // Corrected syntax here
      username: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    // Handle form submission here
    console.log(data);
  };

  return (
    <styled.StyledContainer>
      <styled.FormContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>Username:</label>
            <Controller
              name="username"
              control={control}
              render={({ field }) => (
                <>
                  <styled.StyledInput
                    type="text"
                    {...field}
                    error={errors.username}
                  />
                </>
              )}
            />
          </div>
          <div>
            <label>Email:</label>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <>
                  <styled.StyledInput
                    type="text"
                    {...field}
                    error={errors.email}
                  />
                </>
              )}
            />
          </div>
          <div>
            <label>Password:</label>
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <>
                  <styled.StyledInput
                    type="password"
                    {...field}
                    error={errors.password}
                  />
                </>
              )}
            />
          </div>
          <div>
            <styled.StyledButton type="submit" onClick={handleSubmit(onSubmit)}>
              Submit
            </styled.StyledButton>
          </div>
        </form>
      </styled.FormContainer>
    </styled.StyledContainer>
  );
};

export default RegistrationForm;
