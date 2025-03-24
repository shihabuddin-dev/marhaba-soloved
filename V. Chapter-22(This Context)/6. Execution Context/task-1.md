**১. Execution Context কী জিনিস? এইটা কীভাবে কাজ করে?**

**Execution Context** হলো JavaScript কোড চলার সময় যে পরিবেশ তৈরি হয়, যেখানে কোড এক্সিকিউট হয়। এটি তিনটি প্রধান অংশে বিভক্ত: **Global Execution Context**, **Function Execution Context**, এবং **Eval Execution Context** (যদি `eval()` ব্যবহার করা হয়)। 

এটি যখন তৈরি হয়, JavaScript কোডের জন্য কিছু গুরুত্বপূর্ণ তথ্য যেমন **variable environment**, **this**, এবং **scope chain** প্রস্তুত করা হয়। প্রথমে, **Global Execution Context** তৈরি হয় এবং তারপর ফাংশন কল হলে, তার নিজস্ব **Function Execution Context** তৈরি হয়। কোড এক্সিকিউট হওয়ার সময় এই কন্টেক্সটগুলো স্ট্যাক আকারে রাখা হয়, এবং এক্সিকিউশন শেষে স্ট্যাক থেকে সরানো হয়।