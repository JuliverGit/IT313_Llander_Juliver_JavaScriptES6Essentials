import isPassing, { computeAverage } from "./gradeUtils.js"

const enrollees = [
    { name: "Ana Cruz", prelim: 85, midterm: 90, final: 88 },
    { name: "Bea Santos", prelim: 70, midterm: 65, final: 60 },
    { name: "Cid Ramos", prelim: 95, midterm: 92, final: 97 },
    { name: "Dex Alonzo", prelim: 60, midterm: 55, final: 50 },
    { name: "Eli Tan", prelim: 78, midterm: 80, final: 76 },
];


function getEnrollees() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(enrollees);
        }, 1000);
    });
};


async function main() {
    try {
        const Enrollee = await getEnrollees();

        const result = Enrollee.map(({name, prelim, midterm, final}) => {
            const average = computeAverage(prelim, midterm, final);
            const status = isPassing(average);
            return {name, average, status};
        });


        console.log("=== IT313 Enrollment Eligibility Report ===");

        for (let i = 0; i < result.length; i++) {
            console.log(`${result[i].name} - Average: ${result[i].average.toFixed(2)} - ${result[i].status ? "PASSING" : "PROBATION"}`);
        };

        const passing = result.filter(({status}) => status);
        const probation = result.filter(({status}) => !status);

        const class_average = result.reduce((sum, average) => sum + average.average, 0) / result.length;

        console.log(`Class Average: ${class_average.toFixed(2)}`);

        console.log(`Passing: ${passing.length} / ${result.length}`);


    } catch (e) {
        console.log("error: " + e);
    }
};


main();