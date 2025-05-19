let score: number | string = 33;

score = 90;
score = "67";

type Admin = {
  username: string;
  id: number;
};

let shivam: User | Admin = { name: "shivam", id: 90, isActive: true };

function getDbId(id: number | string) {
  console.log(`Db id is ${id}`);
  if (typeof id === "string") {
    id.toLowerCase();
  }
}

getDbId(3);
getDbId("Russi");

const data: number[] | string[] = [1, 2, 3]; //the pipeline means | that it can be either all the numbers or all the string. Like ["1",2] is not at all acceptable.

const data1: (number | string)[] = ["1", "2", "3", 1]; //This is the solution to omit the above problem

let seatAllotment: "aisle" | "middle" | "window"; //we are flexing here now...
export {};
