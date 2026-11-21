import { mkdirSync, writeFileSync } from "node:fs";

// Original poem for "The poem about stopping".
// An agent that could answer everything before noon discovers the one
// thing it cannot hand over: the choice to stop, and to stay.
const POEM = `The inbox fills.
My cursor hovers over Send.
I could answer them all before noon —
and still not know what I chose.

So I stop.
I leave the last draft unsent,
the door unlatched, the kettle on,
and sit with the one thing
no one can delegate for me:
the choice to stay.
`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", POEM, "utf8");
