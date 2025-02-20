import axios from "axios";
import { useForm } from "react-hook-form";
function AddBlog() {
  const { register, handleSubmit, formState } = useForm();

  const onSubmit = async (data) => {
    console.log("Form Data:", data);
    try {
      // Send the form data to your server's /api/blogs endpoint
      const response = await axios.post(
        "http://localhost:3000/api/blogs",
        data
      );
      console.log("Blog created:", response.data);
      // Optionally, you can clear the form or provide user feedback here
    } catch (error) {
      console.error("Error creating blog:", error);
    }
  };

  return (
    <>
      <div></div>
      <form
        className="flex justify-start flex-col col-span-3"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className="border"
          {...register("title", { required: "title is required" })}
          placeholder="Title"
        />

        <input
          {...register("description", {
            required: "descrption is required",
          })}
          placeholder="description"
        />
        <input
          className="border"
          {...register("body", { required: "body is required" })}
          placeholder="body"
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default AddBlog;
