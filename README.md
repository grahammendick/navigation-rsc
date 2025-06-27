# Navigation Patterns in RSC

Using Next.js to learn about RSC is like reading newspapers to understand how the world works. The person who hasn't seen Next.js at all is better educated about RSC than the person who has only ever used the App Router. You might find this weird because the RSC team looks a lot like the App Router team. But remember, the inventor of the qwerty keyboard, Christopher Sholes, didn't know how to touch type. Let's take a look at how hard it is to build a Master/Details page with the App Router yet how easy it is to build with RSC.

Take a Master/Details page that shows the top 10 trending Twitter/X hashtags and selecting one brings up related tweets. Imagine that a user selects the 10th hashtag but, in the time they took to choose, it slipped down to 11th place. For the App router that presents a huge problem because, when it fetches the related tweets, it also fetches the top 10 list again. The user ends up scratching their head, wondering how they came to be looking at the tweets for a hashtag that isn't in their list anymore.


```
+----------------------------+
|   +-------+   --- ---- --  |
|   |       |   ----- -----  |
|   |   M  +-------+ --- --  |
|   |   A  |       | - ----  |
|   |   S  |  DET  | ---- -  |
|   |   T  |       |         |
|   |   E  +-------+         |
|   |   R   |                |
|   |       |                |
|   |       |                |
+----------------------------+
```
