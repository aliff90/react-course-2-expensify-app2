import moment from "moment";

export default [{
    id: "1",
    description: "Gum",
    note: "",
    amount: 195,
    createdAt: 0 //1970
}, {
    id: "2",
    description: "Rent",
    note: "",
    amount: 109500,
    createdAt: moment(0).subtract(1, "days").valueOf() //1969
}, {
    id: "3",
    description: "Credit Card",
    note: "",
    amount: 4500,
    createdAt: moment(0).add(4, "days").valueOf() //1970 4 days
}]