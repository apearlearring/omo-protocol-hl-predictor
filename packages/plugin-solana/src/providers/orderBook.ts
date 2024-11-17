import { IAgentRuntime, Memory, Provider, State } from "@ai16z/eliza";
interface Order {
    userId: string;
    ticker: string;
    contractAddress: string;
    timestamp: string;
    buyAmount: number;
    price: number;
}

const orderBookProvider: Provider = {
    get: async (runtime: IAgentRuntime, message: Memory, _state?: State) => {
        const userId = message.userId;

        // Read the order book from the JSON file
        const orderBookPath = runtime.getSetting("orderBookPath");
        let orderBook: Order[] = [];
        const cachedOrderBook = await runtime.cacheManager.get(orderBookPath);

        if (cachedOrderBook) {
            orderBook = JSON.parse(cachedOrderBook) as Order[];
        }

        // Filter the orders for the current user
        const userOrders = orderBook.filter((order) => order.userId === userId);

        let totalProfit = 0;
        for (const order of userOrders) {
            // Get the current price of the asset (replace with actual price fetching logic)
            const currentPrice = 120;

            const priceDifference = currentPrice - order.price;
            const orderProfit = priceDifference * order.buyAmount;
            totalProfit += orderProfit;
        }

        return `The user has made a total profit of $${totalProfit.toFixed(2)} for the agent based on their recorded buy orders.`;
    },
};

export { orderBookProvider };
