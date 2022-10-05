import {translate} from '@docusaurus/Translate';

const translations = {
  button: {
    buttonText: translate({
      id: 'theme.SearchBar.label',
      message: 'Søk',
      description: 'The ARIA label and placeholder for search button',
    }),
    buttonAriaLabel: translate({
      id: 'theme.SearchBar.label',
      message: 'Søk',
      description: 'The ARIA label and placeholder for search button',
    }),
  },
  modal: {
    searchBox: {
      resetButtonTitle: translate({
        id: 'theme.SearchModal.searchBox.resetButtonTitle',
        message: 'Clear the query',
        description: 'The label and ARIA label for search box reset button',
      }),
      resetButtonAriaLabel: translate({
        id: 'theme.SearchModal.searchBox.resetButtonTitle',
        message: 'Clear the query',
        description: 'The label and ARIA label for search box reset button',
      }),
      cancelButtonText: translate({
        id: 'theme.SearchModal.searchBox.cancelButtonText',
        message: 'Kanseller',
        description: 'The label and ARIA label for search box cancel button',
      }),
      cancelButtonAriaLabel: translate({
        id: 'theme.SearchModal.searchBox.cancelButtonText',
        message: 'Kanseller',
        description: 'The label and ARIA label for search box cancel button',
      }),
    },
    startScreen: {
      recentSearchesTitle: translate({
        id: 'theme.SearchModal.startScreen.recentSearchesTitle',
        message: 'Nylig',
        description: 'The title for recent searches',
      }),
      noRecentSearchesText: translate({
        id: 'theme.SearchModal.startScreen.noRecentSearchesText',
        message: 'Ingen nylig søk',
        description: 'The text when no recent searches',
      }),
      saveRecentSearchButtonTitle: translate({
        id: 'theme.SearchModal.startScreen.saveRecentSearchButtonTitle',
        message: 'Lagre søk',
        description: 'The label for save recent search button',
      }),
      removeRecentSearchButtonTitle: translate({
        id: 'theme.SearchModal.startScreen.removeRecentSearchButtonTitle',
        message: 'Fjern søk fra hisorie logg',
        description: 'The label for remove recent search button',
      }),
      favoriteSearchesTitle: translate({
        id: 'theme.SearchModal.startScreen.favoriteSearchesTitle',
        message: 'Favorite',
        description: 'The title for favorite searches',
      }),
      removeFavoriteSearchButtonTitle: translate({
        id: 'theme.SearchModal.startScreen.removeFavoriteSearchButtonTitle',
        message: 'Fjern søk fra favorite',
        description: 'The label for remove favorite search button',
      }),
    },
    errorScreen: {
      titleText: translate({
        id: 'theme.SearchModal.errorScreen.titleText',
        message: 'Kan ikke hente resultater',
        description: 'The title for error screen of search modal',
      }),
      helpText: translate({
        id: 'theme.SearchModal.errorScreen.helpText',
        message: 'You might want to check your network connection.',
        description: 'The help text for error screen of search modal',
      }),
    },
    footer: {
      selectText: translate({
        id: 'theme.SearchModal.footer.selectText',
        message: 'For valg',
        description: 'The explanatory text of the action for the enter key',
      }),
      selectKeyAriaLabel: translate({
        id: 'theme.SearchModal.footer.selectKeyAriaLabel',
        message: 'Press knappen',
        description:
          'The ARIA label for the Enter key button that makes the selection',
      }),
      navigateText: translate({
        id: 'theme.SearchModal.footer.navigateText',
        message: 'For navigasjon',
        description:
          'The explanatory text of the action for the Arrow up and Arrow down key',
      }),
      navigateUpKeyAriaLabel: translate({
        id: 'theme.SearchModal.footer.navigateUpKeyAriaLabel',
        message: 'Pil opp',
        description:
          'The ARIA label for the Arrow up key button that makes the navigation',
      }),
      navigateDownKeyAriaLabel: translate({
        id: 'theme.SearchModal.footer.navigateDownKeyAriaLabel',
        message: 'Pil ned',
        description:
          'The ARIA label for the Arrow down key button that makes the navigation',
      }),
      closeText: translate({
        id: 'theme.SearchModal.footer.closeText',
        message: 'For å lukke',
        description: 'The explanatory text of the action for Escape key',
      }),
      closeKeyAriaLabel: translate({
        id: 'theme.SearchModal.footer.closeKeyAriaLabel',
        message: 'Escape key knapp',
        description:
          'The ARIA label for the Escape key button that close the modal',
      }),
      searchByText: translate({
        id: 'theme.SearchModal.footer.searchByText',
        message: 'Lagre søk av',
        description: 'The text explain that the search is making by Algolia',
      }),
    },
    noResultsScreen: {
      noResultsText: translate({
        id: 'theme.SearchModal.noResultsScreen.noResultsText',
        message: 'No results for',
        description:
          'The text explains that there are no results for the following search',
      }),
      suggestedQueryText: translate({
        id: 'theme.SearchModal.noResultsScreen.suggestedQueryText',
        message: 'Try searching for',
        description:
          'The text for the suggested query when no results are found for the following search',
      }),
      reportMissingResultsText: translate({
        id: 'theme.SearchModal.noResultsScreen.reportMissingResultsText',
        message: 'Believe this query should return results?',
        description:
          'The text for the question where the user thinks there are missing results',
      }),
      reportMissingResultsLinkText: translate({
        id: 'theme.SearchModal.noResultsScreen.reportMissingResultsLinkText',
        message: 'Let us know.',
        description: 'The text for the link to report missing results',
      }),
    },
  },
  placeholder: translate({
    id: 'theme.SearchModal.placeholder',
    message: 'Search docs',
    description: 'The placeholder of the input of the DocSearch pop-up modal',
  }),
};
export default translations;
