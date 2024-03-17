import Header from "@/components/Header";
import TextImageComponent from "@/components/TextImageComponent";
import classes from "./page.module.css";
export default function Home() {
  return (
    <main className={classes.body}>
      <Header />
      <TextImageComponent />
    </main>
  );
}
