// RoomRegister.tsx
import React from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import * as Styled from "./zod.style";

const roomRegisterSchema = z.object({
  roomcategory: z.string().min(1, "Room Category Name is required"),
  roomtype: z.string().min(1, "Room Type Name is required"),
});

type RoomRegisterData = z.infer<typeof roomRegisterSchema>;

export default function RoomRegister() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RoomRegisterData>({
    resolver: zodResolver(roomRegisterSchema),
    defaultValues: { roomcategory: "", roomtype: "" },
  });

  const onSubmit: SubmitHandler<RoomRegisterData> = (newData) => {
    console.log(newData);
    // Set flag to display success message
  };

  return (
    <Styled.StyledForm onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Styled.StyledLabel>Room Category Name</Styled.StyledLabel>
        <Controller
          name="roomcategory"
          control={control}
          render={({ field }) => (
            <>
              <Styled.StyledSelect {...field}>
                <option value="">Select Room Category</option>
                {/* Add your options here */}
              </Styled.StyledSelect>
              {errors.roomcategory && (
                <p style={{ color: "red" }}>{errors.roomcategory.message}</p>
              )}
            </>
          )}
        />
      </div>

      <div>
        <Styled.StyledLabel>Room Type Name</Styled.StyledLabel>
        <Controller
          name="roomtype"
          control={control}
          render={({ field }) => (
            <>
              <Styled.StyledInput
                {...field}
                placeholder="Enter Room Type Here"
              />
              {errors.roomtype && (
                <p style={{ color: "red" }}>{errors.roomtype.message}</p>
              )}
            </>
          )}
        />
      </div>

      <Styled.StyledButton type="submit">Submit</Styled.StyledButton>
    </Styled.StyledForm>
  );
}
