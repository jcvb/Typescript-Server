import { Request, Response } from "express";
import { Posts } from "../models/Posts";
import { faker } from "@faker-js/faker";

const getPosts = async (req: Request, res: Response): Promise<void> => {
  try {
    const posts = await Posts.findAll();
    res.json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

const createPosts = async (req: Request, res: Response): Promise<void> => {
  try {
    const posts = generateFakePosts();
    console.log(posts[0].title);
    res.json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

const generateFakePosts = () => {
  const createRandomPosts = () => {
    return {
      title: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      author: faker.person.firstName(),
      image: faker.image.urlPicsumPhotos({ width: 640, height: 480}),
      date: faker.date.anytime(),
      category: faker.commerce.department(),
    };
  };

  const posts = faker.helpers.multiple(createRandomPosts, {
    count: 10,
  });

  return posts;
};

export { getPosts, createPosts };
