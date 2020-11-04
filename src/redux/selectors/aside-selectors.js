export const getCurrentPage = (state) => {
    const currentPage = state.pages[state.current]
    return currentPage;
}