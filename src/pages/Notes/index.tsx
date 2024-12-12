import * as Tabs from "@radix-ui/react-tabs";

export default function Notes() {
    return (
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg border border-gray-200">
            <Tabs.Root defaultValue="exam1" className="w-full">
                {/* Tabs List */}
                <Tabs.List className="flex bg-gray-100 rounded-t-lg border-b border-gray-200">
                    <Tabs.Trigger
                        value="exam1"
                        className="flex-1 text-center py-3 font-medium text-gray-700 hover:text-blue-600 focus:text-blue-600 data-[state=active]:text-blue-600 data-[state=active]:border-b-2 data-[state=active]:border-blue-600"
                    >
                        Ecrit 1
                    </Tabs.Trigger>
                    <Tabs.Trigger
                        value="exam2"
                        className="flex-1 text-center py-3 font-medium text-gray-700 hover:text-blue-600 focus:text-blue-600 data-[state=active]:text-blue-600 data-[state=active]:border-b-2 data-[state=active]:border-blue-600"
                    >
                        Prova 2
                    </Tabs.Trigger>
                </Tabs.List>

                {/* Tab Content */}
                <Tabs.Content
                    value="exam1"
                    className="p-4 text-gray-800 space-y-2"
                >
                    <h3 className="text-lg font-semibold">Links para Prova 1</h3>
                    <ul className="list-disc list-inside">
                        <li>
                            <a
                                href="#"
                                className="text-blue-600 hover:underline"
                            >
                                Link para conteúdo 1
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-blue-600 hover:underline"
                            >
                                Link para conteúdo 2
                            </a>
                        </li>
                    </ul>
                </Tabs.Content>

                <Tabs.Content
                    value="exam2"
                    className="p-4 text-gray-800 space-y-2"
                >
                    <h3 className="text-lg font-semibold">Links para Prova 2</h3>
                    <ul className="list-disc list-inside">
                        <li>
                            <a
                                href="#"
                                className="text-blue-600 hover:underline"
                            >
                                Link para conteúdo 1
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-blue-600 hover:underline"
                            >
                                Link para conteúdo 2
                            </a>
                        </li>
                    </ul>
                </Tabs.Content>
            </Tabs.Root>
        </div>
    );
};

