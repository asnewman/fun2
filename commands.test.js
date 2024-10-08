import { moveLeft, moveRight } from "./commands.js";
import { assertEquals } from "jsr:@std/assert";

Deno.test("moveRight", () => {
  const line = "hello world";

  const res1 = moveRight(0, line.length);
  assertEquals(res1, { columnIdx: 1 });

  // End of the line has a +1 so you can continue
  // typing on the line
  const res2 = moveRight(line.length, line.length);
  assertEquals(res2, { columnIdx: line.length + 1});

  const res3 = moveRight(line.length + 1, line.length);
  assertEquals(res3, { columnIdx: line.length + 1});
});

Deno.test("moveLeft", () => {
  const res1 = moveLeft(0);
  assertEquals(res1, { columnIdx: 0 });

  const res2 = moveLeft(4);
  assertEquals(res2, { columnIdx: 3 });
})
