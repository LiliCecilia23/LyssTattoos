import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 style={{marginTop: "-25px", marginBottom: "20px"}}>Recent Work</h1>
      <div class='sk-instagram-feed' data-embed-id='25455559'></div><script src='https://widgets.sociablekit.com/instagram-feed/widget.js' async defer></script>
    </main>
  );
}
