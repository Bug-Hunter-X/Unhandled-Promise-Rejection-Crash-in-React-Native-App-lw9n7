```javascript
// In a React Native component

const MyComponent = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('someAPI');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        setError(error);
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  if (data === null) {
    return <Text>Loading...</Text>;
  }

  return (
    <View>
      {/* ... display data ... */}
    </View>
  );
};
```