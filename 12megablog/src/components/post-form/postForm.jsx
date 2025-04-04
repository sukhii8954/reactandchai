/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Input, Button, RTE ,SelectBtn } from "../index";
import appwriteService from "../../appwrite/config;";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function postForm({ post }) {
  const { register, handleSubmit, watch, setValue, control ,getValues } = useForm({
    defaultValues: {
      // if post already exist then we give exist title to edit otherwise we give empty string to enter new title
      title: post?.title || "",
      slug: slug?.slug || "",
      content: post?.content || "",
      status: post?.status || "active",
    },
  });

  const navigate = useNavigate();
  const userData = useSelector((state) => state.user.userData); // we take the data of user from the state with the help of use selector (getting data  with the help of redux toolkit which we used in authslice.js to take user data if it is login)  ???

  const submit = async (data) => {
    if (post) {
      // if post already exist then we update the post with the data by handling the file
      const file = data.image[0]
        ? await appwriteService.uploadFile(data.image[0])
        : null; // if first exist then upload
      if (file) {  // this means: if file is uploaded then we run one operation of deletion
        // if we have file then we delete previous image already exist
        await appwriteService.deleteFile(post.featuredImage);
      }
            // post.$id = slug here 
      const dbPost = await appwriteService.updatePost(post.$id, {
        ...data, // spreading the all data related to post
        featuredImage: file ? file.$id : undefined,
      });
      if (dbPost) {
        navigate(`/post/${dbPost.$id}`);
      }
    } else {
      // creating new post and uploading file with conditional check
      const file = data.image[0]
        ? await appwriteService.uploadFile(data.image[0])
        : null;

      if (file) {
        const fileId = file.$id;
        data.featuredImage = fileId;
        const newPost = await appwriteService.createPost({
          ...data,
          // when creating a form we would never have a userdata so we get userdata from store and pass it here
          userId: userData.$id,
        });
        if (newPost) {
          navigate(`/post/${newPost.$id}`);
        }
      }
    }
  };
  // creating slug transform
  //  we have 2 i/p field : title and slug
  // title : we have to watch it
  // slug : have to generate value in it
 
  // Note:-  The useCallback hook in React memoizes a function, meaning it stores the function reference and ensures that it is not recreated on every render unless its dependencies change.
  const slugTransform = useCallback((val) => {
    if (val && typeof val === "string")
      return val
        .trim() // Removes extra spaces from start and end
        .toLowerCase()
        .replace(/[^a-zA-Z\d\s]+/g, "-")
        .replace(/\s/g, "-");
  //  if we dont have value and its type is not string then we return empty string 
      return "";
  }, []);


  // Note:interview ques: if you taken an useeffect and called one method in it so how would you optimize it ?
    //  we can store that method in a variable (just shown below) and would return in a callback func with .unsubscribe
    //  so that it did not get called again and again in itself
    
    // ans: Subscribing and unsubscribing within the useEffect's cleanup function (return () => subscription.unsubscribe();) ensures that the subscription's lifecycle is tied to the component's lifecycle.
    // By only subscribing when the dependancy array changes, we are preventing unecessary subscriptions and unsubscriptions. If the dependancy array never changes, then the subscription only happens once

  useEffect(()=> {
                             // passing value and name when we would make a form then we pass from that here
         const subscription = watch((value , {name})=> {
          if(name === 'title'){   // we get title from data user passed and that is stored by ...register 
            setValue('slug',slugTransform(value.title,
              {shouldValidate: true}
            )) // setting value within a slug which is a i/p field in form and 
                                                         // the value we made from slugtransform will set that value
            }                                           // value is an object here that's why value.title we taking
         })

         return ()=> {
          subscription.unsubscribe()
         }
  }, [watch,slugTransform,setValue])

  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
    <div className="w-2/3 px-2">
        <Input
            label="Title :"
            placeholder="Title"
            className="mb-4"
            {...register("title", { required: true })}
        />
        <Input
            label="Slug :"
            placeholder="Slug"
            className="mb-4"
            {...register("slug", { required: true })}
            onInput={(e) => {
                setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
            }}
        />
        <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
    </div>
    <div className="w-1/3 px-2">
        <Input    
            label="Featured Image :"
            type="file"
            className="mb-4"
            accept="image/png, image/jpg, image/jpeg, image/gif"
            {...register("image", { required: !post })}
        />
        {post && (
            <div className="w-full mb-4">
                <img
                    src={appwriteService.getFilePreview(post.featuredImage)}
                    alt={post.title}
                    className="rounded-lg"
                />
            </div>
        )}
        <SelectBtn
            options={["active", "inactive"]}
            label="Status"
            className="mb-4"
            {...register("status", { required: true })}
        />
        <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
            {post ? "Update" : "Submit"}
        </Button>
    </div>
</form>
    
  )
}

export default postForm;

// Note: watch --> we can use this for continous monitoring any field if want to
//    setValue --> in which ever form we have to set the value we use this for setting without writing it directly
//    control  --> if we want control of any form then we can use this which we can pass in other component to take controls of that
//    getValues --> to grab the values of the form or multi forms
