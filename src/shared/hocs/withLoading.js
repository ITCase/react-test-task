export const withLoading = (
  Component,   
  errorText = 'Произошла ошибка при получении данных',
) => {
  return (props) => {
    const { isLoading, error, ...restProps } = props;

    if (isLoading) {
      return <h1>Загрузка...</h1>;
    }

    if (error) {
      return <h1 className="error">{errorText}</h1>;
    }

    return <Component {...restProps} />;
  };
};
