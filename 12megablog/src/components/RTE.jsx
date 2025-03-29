/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";

export default function RTE({ name, control, label, defaultValue = "" }) {  // RTE - real time editor
  return (
    <div className="w-full">
      {label && <label className="inline-block mb-1 pl-1">{label}</label>}

      <Controller
        name={name || "content"} // its a input field's name
        control={control} //it will pass by parent element at that will the control of this component
        render={({ field: { onChange } }) => (
          // joh bhi render krvana h voh idhr likhenge
          <Editor
            initialValue="default value"
            init={{
              initialValue: defaultValue,
              height: 500,
              menubar: true,
              plugins: [
                "image",
                "advlist",
                "autolink",
                "lists",
                "link",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblock",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "help",
                "wordcount",
              ],
              toolbar:
                "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help ",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
            onEditorChange={onChange}

            // means what change take place in editor
            // if there is any change in editor then our field is governed by onchange

            /* We pass onChange from field to onEditorChange, 
            meaning:
            Whenever a user types inside the editor, onEditorChange fires.
            The updated text is sent to onChange, which updates the form state. */
          />
        )} 
      /> 
    </div>
    // NOTES: render in controller
    /* Controller manages the form field, but since it doesn’t know how to display it, we use render to tell it how to render the component.
    render receives an object containing useful properties, like field, which contains input-related props.
    render, we return the input field, spreading field ({...field}) to ensure it works with React Hook Form. 
    
    render function provides an object containing form related methods : onChange , onblur , value etc 
    so , when I pass onchange inside render , we extracting only the onChange function from field object
    " event ki tracking "
    */
  );
}
