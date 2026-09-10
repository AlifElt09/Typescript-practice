  /**
   * A social media platform stores posts.
   * Tasks:
   * 1. Find post that containing "typescript"!
   * 2. Find post that containing "nestjs"!
   * 3. Find the post with highest number of likes!
   * 4. Calculate the total of likes!
   */

  const posts = [
    {
      author: "Andi",
      content: "Learning TypeScript #typescript #programming",
      hashtags: ["typescript", "programming"],
      likes: 120,
    },
    {
      author: "Budi",
      content: "My first NestJS project #nestjs #typescript",
      hashtags: ["nestjs", "typescript"],
      likes: 250,
    },
    {
      author: "Citra",
      content: "Frontend development #nextjs #react",
      hashtags: ["nextjs", "react"],
      likes: 180,
    },
    {
      author: "Deni",
      content: "Backend with NestJS #nestjs #backend",
      hashtags: ["nestjs", "backend"],
      likes: 300,
    },
  ];

  const typescriptPost = posts.find((p) => p.hashtags.includes("typescript"));
  const nestjsPost = posts.find((p) => p.hashtags.includes("nestjs"));
  const mostLikedPost = posts.find((p) => p.likes === Math.max(...posts.map((post) => post.likes)));
  const totalLikes = posts.reduce((t, p) => t + p.likes, 0);

console.log("TypeScript post:", typescriptPost);
console.log("NestJS post:", nestjsPost);
console.log("Highest likes:", mostLikedPost);
console.log("Total likes:", totalLikes);
