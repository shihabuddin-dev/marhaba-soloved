**৬. let এবং var-এর hoisting behavior কি একই**

**`let`** এবং **`var`** এর **hoisting behavior** এক নয়। **`var`** ভেরিয়েবলটি স্কোপে **hoisted** হয়ে **undefined** থাকে, তবে **`let`** ভেরিয়েবলটি **Temporal Dead Zone (TDZ)** তে থাকে, অর্থাৎ এটি ডিক্লেয়ার হওয়ার আগে এক্সেস করলে **ReferenceError** দিবে। **`let`** ব্লক স্কোপে কাজ করে, কিন্তু **`var`** ফাংশন স্কোপে।