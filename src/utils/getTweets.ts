import { TwitterApiReadOnly, UserV2 } from "twitter-api-v2";

interface Users {
  [key: string]: UserV2;
}
export interface Tweet {
  id: string;
  text: string;
  url: string;
  author: UserV2;
}

export const getTweets = async (): Promise<false | Tweet[]> => {
  const token = process.env.TWITTER_API_BREARER_TOKEN || "";
  const listId = process.env.TWITTER_LIST_ID || "";

  if (!token || !listId) return false;

  const client = new TwitterApiReadOnly(token);
  const listTweets = await client.v2.listTweets(listId, {
    "max_results": 10,
    "expansions": "author_id",
    "user.fields": "name,username,verified,profile_image_url",
  });

  try {
    let users: Users = {};
    for (const user of listTweets.data.includes?.users || []) {
      users[user.id] = user;
    }

    let tweets = listTweets.data.data.map((tweet) => {
      const author = users[tweet.author_id as string];

      return {
        id: tweet.id,
        text: tweet.text,
        url: `https://twitter.com/${author.username}/status/${tweet.id}`,
        author: author,
      };
    });

    return tweets;
  } catch (error) {
    return false;
  }
};

export default getTweets;
