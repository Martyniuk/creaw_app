const checkStorage = () => {
    return JSON.parse(localStorage.getItem('selectedOption'));
};

const assignRandomStatus = user => {
    const randomNumber = Math.round(Math.random() * 10);

    if (randomNumber >= 0 && randomNumber <= 2) {
        return { ...user, status: 'hired' };
    } else if (randomNumber >= 3 && randomNumber <= 7) {
        return { ...user, status: 'interviewing' };
    }

    return { ...user, status: 'applied' };
};

const modifyUsersList = ({ results }) => {
    return results.map(user => assignRandomStatus(user));
};

const filterByStatus = (array, status) => {
    return array.filter(v => v.status === status);
};

const collectFilterOptions = ({ results: users }) => {
    const name = users.map(user => ({
        value: `${user.name.first} ${user.name.last}`,
        label: `${user.name.first} ${user.name.last}`,
    }));

    return [...name];
};

export { filterByStatus, collectFilterOptions, checkStorage, modifyUsersList };
