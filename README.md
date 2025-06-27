# Navigation Patterns in RSC

Using Next.js to learn about RSC is like reading newspapers to understand how the world works. The person who hasn't seen Next.js at all is better educated about RSC than the person who has only ever used the App Router. You might find this weird because the RSC team looks a lot like the App Router team. But remember, the inventor of the qwerty keyboard, Christopher Sholes, didn't know how to touch type. Let's take a look at how hard it is to build a Master/Details page with the App Router yet how easy it is to build with RSC.

Take a Master/Details page that shows the top 10 trending Twitter/X hashtags and selecting one brings up related tweets in a modal. Imagine that a user selects the 10th hashtag but, in the time they took to choose, it slipped down to 11th place. For the App router that presents a huge problem because, when it fetches the related tweets, it also fetches the top 10 list again. The user ends up scratching their head, wondering how they came to be looking at the tweets for a hashtag that isn't in their list anymore.

But this problem has everything to do with the App Router and absolutely nothing to do with RSC. The Navigation router is a new RSC framework that doesn't have this problem. When the URL changes you decide which parts of the page update. You can wrap a component in a `SceneView` and pass a `refetch` prop that specifies the URL data that the view depends on. When the user selects a hashtag the Navigation router fetches the `Tweets` modal without refetching the `Trending` list.

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


```tsx
function Trending() {
  return (
    <SceneView refetch={['hashtag']}>
      <Tweets />
    </SceneView>
  );
}
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
