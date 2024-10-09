import Image from "next/image";
import Portrait from "../../public/portrait2.png";
import {Link, Button} from "@nextui-org/react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div id="hero" className="greenBg" style={{margin: "auto", padding: "20px", textAlign: "center", borderRadius: "25px"}}>
        
        <Image src={ Portrait }></Image>

        <div style={{alignSelf: "center", paddingLeft: "20px"}}>
          <h1 style={{color: "#8E936D", marginBottom: "15px"}}>Hi, I'm Lyss!</h1>
          <p>I'm a tattoo artist based in San Jose, CA</p>
          <p>I specialize in fineline, realism, and illustrative designs</p>
          <p style={{marginBottom: "25px"}}>Let's make some magic together!</p>
          <Button as={Link} color="danger" href="/booking" variant="flat">
            Book Here
          </Button>
        </div>
        
      </div>
      <h1 style={{marginTop: "50px", marginBottom: "20px"}}>Recent Work</h1>
      <div class='sk-instagram-feed' data-embed-id='25455559'></div><script src='https://widgets.sociablekit.com/instagram-feed/widget.js' async defer></script>
    </main>
  );
}
