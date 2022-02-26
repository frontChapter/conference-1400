import { TwitterApiReadOnly, UserV2 } from "twitter-api-v2";
import { tweetsList } from "data/tweets-list";

interface Users {
  [key: string]: UserV2;
}
export interface Tweet {
  id: string;
  text: string;
  url: string;
  author: UserV2;
}

const tweetsId = tweetsList.map((url) => url.split("/").pop() || "");

export const getTweets = async (): Promise<false | Tweet[]> => {
  const token = process.env.TWITTER_API_BREARER_TOKEN || "";

  if (!token) return false;

  try {
    const client = new TwitterApiReadOnly(token);
    const listTweets = await client.v2.tweets(tweetsId, {
      "expansions": "author_id",
      "user.fields": "name,username,verified,profile_image_url",
    });

    let users: Users = {};
    for (const user of listTweets.includes?.users || []) {
      users[user.id] = user;
    }

    let tweets = listTweets.data.map((tweet) => {
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
