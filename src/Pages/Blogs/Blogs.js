import React from 'react';

const Blogs = () => {
    return (
        <div className='d-flex'>
            <div className='text-center text-white bg-success border     rounded mt-5 w-25 p-3 shadow m-5'>
                <h2 className='fw-bold'>Authorization vs Authentication</h2>
                <p>
                    Authentication: কাউকে,কোন কিছু, কারো কোনো act যা সঠিক বলে দাবি করা হচ্ছে,  প্রকৃতপক্ষে তা সত্য কিনা নির্ণয় করার giving assurance পক্রিয়া!
                    Authorization: কাউকে কোন কাজ করার জন্য বা কোন resource ব্যবহার করতে পারার permission দেওয়ার পক্রিয়া, অতয়েব আমরা বুজতে পারি
                    Authorization অধিক ক্ষমতা সম্পন্ন
                    চাইলে ওয়েবে প্রবেশ করার অনুমতি
                    দেয় এবং চাইলে বের করে দিতে পারে!!</p>
            </div>
            <div className='text-center text-white bg-success border     rounded mt-5 w-25 p-3 shadow m-5'>
                <h2 className='fw-bold'>Why Are Using Firebase?</h2>
                <p>Firebase হচ্ছে গুগল এর একটি প্লেটফর্ম
                    Authentication System ব্যবহার করা জন্য firebase কে ইউস করি এবং Hosting, Google Analytics Cloud messaging সহ অনেক ফিচার একসাথে আছে এবং গুগল এর প্লেটফর্ম হওয়ায় অনেক বেশি Secure এ জন্য আমরা firebase ব্যবহার করি!</p>
            </div>
            <div className='text-center text-white bg-success border     rounded mt-5 w-25 p-3 shadow m-5'>
                <h2 className='fw-bold'>What other services does firebase</h2>
                <p>OneLogin.
                    JumpCloud.
                    Microsoft Azure Active Directory.
                    CyberArk Identity (formerly Idaptive)
                    Auth0.
                    Rippling.
                    SecureAuth Identity Platform.
                    ForgeRock. </p>
            </div>
        </div>
    );
};

export default Blogs;