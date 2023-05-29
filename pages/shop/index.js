import ThingsComponent from "@/components/things-component";
import { ThingsProvider } from "@/contextAPI/things-context";

export default function ShopPage() {
  const things = [
    { id: 1, name: "thing 1", length: 5 },
    { id: 2, name: "thing 2", length: 2 },
    { id: 3, name: "thing 3", length: 6 },
    { id: 4, name: "thing 4", length: 10 },
    { id: 5, name: "thing 5", length: 1 },
  ];

  return (
    <>
      <ThingsProvider value={things}>
        <div>Shop Page</div>
        <ThingsComponent />
      </ThingsProvider>
    </>
  );
}
