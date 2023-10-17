async function getAllWorks() {
    const response = await fetch("works.json");
    const works = await response.json();
    return works;
};