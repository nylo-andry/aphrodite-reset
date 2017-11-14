const resetContainerStyle = {
  margin: '0',
  padding: '0',
  border: '0',
  fontSize: '100%',
  font: 'inherit',
  verticalAlign: 'baseline',
};

const resetElementStyle = {
  display: 'block',
};

const clearBeforeAfter = {
  ':before': {
    content: 'none',
  },
  ':after': {
    content: 'none',
  },
};

export default {
  globals: {
    '*html': resetContainerStyle,
    '*body': {
      ...resetContainerStyle,
      lineHeight: '1',
    },
    '*div': resetContainerStyle,
    '*span': resetContainerStyle,
    '*applet': resetContainerStyle,
    '*object': resetContainerStyle,
    '*iframe': resetContainerStyle,
    '*h1': resetContainerStyle,
    '*h2': resetContainerStyle,
    '*h3': resetContainerStyle,
    '*h4': resetContainerStyle,
    '*h5': resetContainerStyle,
    '*h6': resetContainerStyle,
    '*p': resetContainerStyle,
    '*blockquote': {
      ...clearBeforeAfter,
      quotes: 'none',
    },
    '*pre': resetContainerStyle,
    '*a': resetContainerStyle,
    '*abbr': resetContainerStyle,
    '*acronym': resetContainerStyle,
    '*address': resetContainerStyle,
    '*big': resetContainerStyle,
    '*cite': resetContainerStyle,
    '*code': resetContainerStyle,
    '*del': resetContainerStyle,
    '*dfn': resetContainerStyle,
    '*em': resetContainerStyle,
    '*img': resetContainerStyle,
    '*ins': resetContainerStyle,
    '*kbd': resetContainerStyle,
    '*q': {
      ...clearBeforeAfter,
      quotes: 'none',
    },
    '*s': resetContainerStyle,
    '*samp': resetContainerStyle,
    '*small': resetContainerStyle,
    '*strike': resetContainerStyle,
    '*strong': resetContainerStyle,
    '*sub': resetContainerStyle,
    '*sup': resetContainerStyle,
    '*tt': resetContainerStyle,
    '*var': resetContainerStyle,
    '*b': resetContainerStyle,
    '*u': resetContainerStyle,
    '*i': resetContainerStyle,
    '*center': resetContainerStyle,
    '*dl': resetContainerStyle,
    '*dt': resetContainerStyle,
    '*dd': resetContainerStyle,
    '*ol': {
      listStyle: 'none',
    },
    '*ul': {
      listStyle: 'none',
    },
    '*li': resetContainerStyle,
    '*fieldset': resetContainerStyle,
    '*form': resetContainerStyle,
    '*label': resetContainerStyle,
    '*legend': resetContainerStyle,
    '*table': {
      borderCollapse: 'collapse',
      borderSpacing: '0',
    },
    '*caption': resetContainerStyle,
    '*tbody': resetContainerStyle,
    '*tfoot': resetContainerStyle,
    '*thead': resetContainerStyle,
    '*tr': resetContainerStyle,
    '*th': resetContainerStyle,
    '*td': resetContainerStyle,
    '*article': resetElementStyle,
    '*aside': resetElementStyle,
    '*canvas': resetContainerStyle,
    '*details': resetElementStyle,
    '*embed': resetContainerStyle,
    '*figure': resetElementStyle,
    '*figcaption': resetElementStyle,
    '*footer': resetElementStyle,
    '*header': resetElementStyle,
    '*hgroup': resetElementStyle,
    '*menu': resetElementStyle,
    '*nav': resetElementStyle,
    '*output': resetContainerStyle,
    '*ruby': resetContainerStyle,
    '*section': resetElementStyle,
    '*summary': resetContainerStyle,
    '*time': resetContainerStyle,
    '*mark': resetContainerStyle,
    '*audio': resetContainerStyle,
    '*video': resetContainerStyle,
  },
};