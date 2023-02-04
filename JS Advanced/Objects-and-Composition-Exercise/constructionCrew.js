function constructionCrew(object) {
    if (object.dizziness) {
        return {
            ...object,
            levelOfHydrated: object.experience * 0.1 * object.weight,
            dizziness: false,
        };
    }
    return object;
}

console.log(constructionCrew({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true
}));

console.log(constructionCrew({
    weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false
}));