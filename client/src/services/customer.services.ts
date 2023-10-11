import axios from "axios"

export const fetchCustomerData = 
    async (currentPage: number, searchQuery: string) => {
        const queryParams = `?page=${currentPage}&search=${searchQuery}`;
        const apiUrl = `${`/api/customers`}${queryParams}`;

        const response = await axios.get(apiUrl);

        return {
            rows: response.data.results,
            totalPages: response.data.totalPages,
        };
    };

export const fetchAccountData = 
    async (accountId: string, currentPage: number, searchQuery: string) => {
        const url = `/api/customers/account/${accountId}/transaction?page=${currentPage}&search=${searchQuery}`
        const response = await axios.get(url)
        const { transactions, totalPages } = response.data[0]
        return { rows: transactions, totalPages }
    }