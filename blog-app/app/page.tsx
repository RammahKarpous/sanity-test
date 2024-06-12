import Header from "@/components/Header";
import CoreValues from "@/components/core-values/CoreValues";
import { client } from "@/lib/sanity";

export default async function Home() {
	const mission = await client.fetch(`*[_type == "mission"]`);

    return (
        <main>
            <Header />

			<section className="my-64 mx-auto max-w-3xl w-full text-center">
				<h1 className="text-4xl font-bold mb-5">{mission[0].title}</h1>
				<p>{mission[0].text[0].children[0].text}</p>
			</section>

			<CoreValues />
        </main>
    );
}
