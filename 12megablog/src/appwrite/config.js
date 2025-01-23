import config from "../config/confi";
import { Client, ID, Databases, Storage, Query} from "appwrite";

export class ServiceDb {
  client = new Client();
  databases;
  bucket; // storage

  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);

    // just like: const db = new Databases(client);

    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }
  //  here we passing fileID as a name of featuredImage

  async creatPost({ title, content, featuredImage, userId, status }) {
    try {
      const response = await this.databases.createDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        ID.unique(),
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );

      return response.$id;
    } catch (error) {
      console.log("Appwrite service :: createPost :: error", error);
    }
  }

  async updatePost(documentId, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        documentId, // ID.unique(),

        {
          title,
          content,
          featuredImage,
          status,
        }
      );
    } catch (error) {
      console.log("Appwrite service :: updatePost :: error", error);
    }
  }

  async deletePost(documentId) {
    try {
      await this.databases.deleteDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        documentId
      );
      return true;
    } catch (error) {
      console.log("Appwrite service error", error);
      return false;
    }
  }

  async getpost(documentId) {
    try {
      return await this.databases.getDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        documentId
      );
    } catch (error) {
      console.log("Appwrite service error:: getpost :: error", error);
      return false;
    }
  }

  //   I want all post whose status is active so we use
  // query for that , equal Returns document if attribute is
  //  equal to any value in the provided array.
  // we can query if had made indexes in appwrite database.
  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        queries
        // we can add pagination here and many other
        // things by reading more from docs of appwrite
      );
    } catch (error) {
      console.log("error", error);
      return false;
    }
  }

  //****** file uploading services ********
  // will add this serivce in some other file afterwards...

  async uploadFile(file) {
    try {
      // here bucket refers to storage
      return await this.bucket.createFile(
        config.appwriteBucketId,
        ID.unique(),
        file // here from return we get ID of file.
      );
    } catch (error) {
      console.log("Appwrite service :: uploadfile :: error", error);
      return false;
    }
  }
  // delete file service
  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(config.appwriteBucketId, fileId);
      return true;
    } catch (error) {
      console.log("Appwrite service :: deleteFile :: error", error);
      return false;
    }
  }
  
  async getfilepreview(fileId){
      return this.bucket.getFilePreview(
        config.appwriteBucketId,
        fileId,
         // --> have to import ImageGravity and ImageFormat from Appwrite
        // ImageGravity.Center, // gravity optional
        // ImageFormat.Jpg,  // output optional
      )
  }
    


}

const service = new ServiceDb();
export default service;
