# Navigation Patterns in RSC

Using Next.js to learn about RSC is like reading newspapers to understand how the world works. The person who hasn't seen Next.js at all is better educated about RSC than the person who has only ever used the App Router. You might find this weird because the RSC team looks a lot like the App Router team. But remember, the inventor of the qwerty keyboard, Christopher Sholes, didn't know how to touch type. Let's take a look at how hard it is to build a Master/Details page with the App Router yet how easy it is to build with RSC.

Take a Master/Details page that shows the top 10 trending Twitter/X hashtags and, when one is selected, brings up related tweets in a modal. Imagine that a user selects the 10th hashtag but, in the time they took to choose, it slipped down to 11th place. For the App router that presents a huge problem because, when it fetches the related tweets, it also fetches the top 10 list again. The user ends up scratching their head, wondering how they came to be looking at the tweets for a hashtag that isn't in their list anymore.

```
+----------------------------+
|   +-------+   --- ---- --  |
|   |       |   ----- -----  |
|   |   T  +-------+ --- --  |
|   |   O  |       | - ----  |
|   |   P  |  TAG  | ---- -  |
|   |      |       |         |
|   |   1  +-------+         |
|   |   0   |                |
|   |       |                |
|   |       |                |
+----------------------------+
```

But this problem has everything to do with the App Router and absolutely nothing to do with RSC. [The Navigation router](https://grahammendick.github.io/navigation/) is a new RSC framework that doesn't have this problem. When the URL changes you decide which parts of the page update. You can wrap a component in a `SceneView` and pass a `refetch` prop that specifies the URL data that the view depends on. When the user selects a hashtag the Navigation router fetches the `Tweets` modal without refetching the `Trending` list.

```tsx
import { SceneView } from "navigation-react";

function App() {
  return (
    <>
      <SceneView refetch={[]}>
        <Trending />
      </SceneView>
      <SceneView refetch={['hashtag']}>
        <Tweets />
      </SceneView>
    </>
  );
}
```

The App Router's solution to the problem is parallel routes. But now you have 2 problems. Parallel routes allow you to fetch just a part of the page, for example, fetching the tweets without refetching the trending hashtags. But they're so restrictive that they end up being square pegs for the round holes in your pages. Let's change the Twitter example so that the related tweets are shown alongside the trending hashtags instead of overlaid in a modal.

```
+----------------------------+
|   +-------+   --- ---- --  |
|   |       |   ----- -----  |
|   |   T   |    +-------+   |
|   |   O   |    |       |   |
|   |   P   |    |  TAG  |   |
|   |       |    |       |   |
|   |   1   |    +-------+   |
|   |   0   |   ---- --- --  |
|   |       |   ------ ----  |
|   |       |   --- ----- -  |
+----------------------------+
```

Parallel routes are happy as long as the related tweets starts after the trending list finishes. But they can't handle mixing the two together. You can't make a hole in the master content and slot the details into it. You can only append the details to the master list. But parallel routes are part of the App Router ideology only. With the Navigation router you can render the `Tweets` component anywhere inside the `Trending` one.

```tsx
function Trending() {
  return (
    <SceneView refetch={['hashtag']}>
      <Tweets />
    </SceneView>
  );
}
```

```
+----------------------------+
|   +-------+   --- ---- --  |
|   |       |   ----- -----  |
|   |   T   |   ---- --- --  |
|   +-------+   ------ ----  |
|   |       |   --- ----- -  |
|   |  TAG  |                |
|   |       |                |
|   +-------+                |
|   |   O   |                |
|   |   P   |                |
+----------------------------+
```


```tsx
function Layout() {
  return (
    <Trending>
      <SceneView refetch={['hashtag']}>
        <Tweets />
      </SceneView>
    </Trending>
  );
}

```
