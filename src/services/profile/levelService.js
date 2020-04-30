const levelService = {
    percent: (experience) => {

    },
    level: (experience) => {
        return 1 + Math.trunc(experience / 10)
    }
}
    
export default levelService;