/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { Input, Button, RTE } from "../index";
import service from "../../appwrite/config;";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function postForm({ post }) {
  const { register, handleSubmit, watch, setValue, control } = useForm({
    defaultValues: {
      // if post already exist then we give exist title to edit otherwise we give empty string to enter new title
      title: post?.title || "",
      slug: slug?.slug || "",
      content: post?.content || "",
      status: post?.status || "active",
    },
  });

  const navigate = useNavigate();
  const userData = useSelector((state) => state.user.userData); // we take the data of user from the state with the help of use select   ???

  const submit = async (data) => {
    if (post) {
      // if post already exist then we update the post with the data by handling the file
      const file = data.image[0]
        ? await appwriteSerivice.uploadFile(data.image[0])
        : null; // if first exist then upload
      if (file) {
        // if we have file then we delete previous image already exist
        await appwriteSerivice.deleteFile(post.featuredImage);
      }

      const dbPost = await appwriteSerivice.updatePost(post.$id, {
        ...data, // spreading the all data related to post
        featuredImage: file ? file.$id : undefined,
      });
      if (dbPost) {
        navigate(`/post/${dbPost.$id}`);
      }
    } else {
      // creating new post and uploading file with conditional check
      const file = data.image[0]
        ? await appwriteSerivice.uploadFile(data.image[0])
        : null;

      if (file) {
        const fileId = file.$id;
        data.featuredImage = fileId;
        const newPost = await appwriteSerivice.createPost({
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

  const slugTransform = useCallback((val) => {
    if (val && typeof val === "string")
      return val
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-Z\d\s]+/g, "-")
        .replace(/\s/g, "-");
  //  if we dont have value and its type is not string then we return empty string 
    return "";
  }, []);

  return <div>PostForm</div>;
}

export default postForm;

// Note: watch --> we can use this for continous monitoring any field if want to
//    setValue --> in which ever form we have to set the value we use this for setting without writing it directly
//    control  --> if we want control of any form then we can use this which we can pass in other component to take controls of that
//    getValues --> to grab the values of the form or multi forms
