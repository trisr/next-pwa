"use client";
import { useEffect, useState } from 'react';
import Image from "next/image";

// const base64ToUint8Array = (base64: string): Uint8Array => {
//   const padding = '='.repeat((4 - (base64.length % 4)) % 4);
//   const b64 = (base64 + padding).replace(/-/g, '+').replace(/_/g, '/');

//   const rawData = window.atob(b64);
//   const outputArray = new Uint8Array(rawData.length);

//   for (let i = 0; i < rawData.length; ++i) {
//     outputArray[i] = rawData.charCodeAt(i);
//   }
//   return outputArray;
// };

export default function Home() {
  // const [isSubscribed, setIsSubscribed] = useState(false);
  // const [subscription, setSubscription] = useState<PushSubscription | null>(null);
  // const [registration, setRegistration] = useState<ServiceWorkerRegistration | null>(null);

  // useEffect(() => {
  //   console.log('ini window:', window)
  //   console.log('ini workbox:', window.workbox)
  //   console.log('ini navigator:', navigator)

  //   if (
  //     typeof window !== 'undefined' &&
  //     'serviceWorker' in navigator &&
  //     window.workbox !== undefined
  //   ) {
  //     // run only in browser
  //     navigator.serviceWorker.ready.then((reg) => {
  //       console.log('waku1')
  //       reg.pushManager.getSubscription().then((sub) => {
  //         if (sub && !(sub.expirationTime && Date.now() > sub.expirationTime - 5 * 60 * 1000)) {
  //           setSubscription(sub);
  //           setIsSubscribed(true);
  //         }
  //       });
  //       setRegistration(reg);
  //     });
  //   }
  // }, []);

  // const subscribeButtonOnClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
  //   event.preventDefault();
  //   console.log('waku')
  //   if (!registration) return;
  //   console.log('waka')
  //   const sub = await registration.pushManager.subscribe({
  //     userVisibleOnly: true,
  //     applicationServerKey: base64ToUint8Array(process.env.NEXT_PUBLIC_WEB_PUSH_PUBLIC_KEY!),
  //   });
  //   // TODO: you should call your API to save subscription data on server in order to send web push notification from server
  //   setSubscription(sub);
  //   setIsSubscribed(true);
  //   console.log('web push subscribed!');
  //   console.log(sub);
  // };

  // const sendNotificationButtonOnClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
  //   event.preventDefault();
  //   if (!subscription) {
  //     console.error('web push not subscribed');
  //     return;
  //   }

  //   await fetch('/api/notification', {
  //     method: 'POST',
  //     headers: {
  //       'Content-type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       subscription,
  //     }),
  //   });
  // };

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js")
        .then((registration) => {
          console.log("Registration successful");
        })
        .catch((error) => {
          console.log("Service worker registration failed");
        });
    }
  }, []);

  // useEffect(() => {
  //   if ("serviceWorker" in navigator) {
  //     // const handleServiceWorker = async (subscription: any) => {
  //     //   const res = await fetch("http://localhost:4000/subscribe", {
  //     //     method: "POST",
  //     //     body: JSON.stringify(subscription),
  //     //     headers: {
  //     //       "content-type": "application/json",
  //     //     },
  //     //   });

  //     //   const data = await res.json();
  //     //   console.log(data);
  //     // }
  //     // navigator.serviceWorker.ready.then((swReg) => {
  //     //   console.log('waka')
  //     //   const options = {
  //     //      userVisibleOnly: true,
  //     //      applicationServerKey: process.env.NEXT_PUBLIC_WEB_PUSH_PUBLIC_KEY,
  //     //      // urlB64ToUint8Array is helper function
  //     //   }
  //     //   swReg.pushManager.subscribe(options)
  //     //   .then(function(subscription) {
  //     //     handleServiceWorker(subscription)
  //     //   })
  //     // })
  //     const handleServiceWorker = async () => {
  //       // console.log('ini window:', window)
  //       // console.log('ini navigator.serviceWorker:', navigator.serviceWorker.ready)
  //       // console.log('ini navigator:', navigator)
  //       const register = await navigator.serviceWorker.register("/sw.js", { scope: './'})
  //       .catch((err) => { return console.log('[SERVICE WORKER] Registration Error:', err) });
  //       console.log('[SERVICE WORKER] Registered. Scope:', register?.scope);

  //       await navigator.serviceWorker.ready;
  //       const subscription = await register?.pushManager.subscribe({
  //         userVisibleOnly: true,
  //         applicationServerKey: process.env.NEXT_PUBLIC_WEB_PUSH_PUBLIC_KEY,
  //       });

  //       const res = await fetch("http://localhost:4000/subscribe", {
  //         method: "POST",
  //         body: JSON.stringify(subscription),
  //         headers: {
  //           "content-type": "application/json",
  //         },
  //       });

  //       const data = await res.json();
  //       console.log(data);
  //     };
  //     handleServiceWorker();
  //   }
  // }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">src/app/page.tsx</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      {/* <div className="btn-container">
        <div>
          <button
            onClick={subscribeButtonOnClick}
            disabled={isSubscribed} 
            // className="btn-rahul"
          >
            Subscribe
          </button>
        </div>
        <div>
          <button
            onClick={sendNotificationButtonOnClick}
            disabled={!isSubscribed}
            // className="btn-rahul"
          >
            Send Notification
          </button>
        </div>
      </div> */}

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Templates{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Explore starter templates for Next.js.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Deploy{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  );
}
