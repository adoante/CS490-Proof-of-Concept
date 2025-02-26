'use client'
import { Button, AbsoluteCenter, VStack, Box, Alert } from "@chakra-ui/react"
import { CloseButton } from "@/components/ui/close-button"
import { useState } from 'react';

export default function ButtonAPI() {
  const [data, setData] = useState({ data: [] });
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState('');
  const [showAlert, setShowAlert] = useState(false)

  const testBackEnd = async () => {
    setIsLoading(true);

    try {
      const response = await fetch('http://127.0.0.1:8000/hero/Deadpond');

      if (!response.ok) {
        throw new Error(`Failed to fetch data! Error: ${response.status}`);
      }

      const result = await response.json();

      setData(result);
      setShowAlert(true);
    } catch (err) {
      setErr(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleShowAlert = () => {
    setShowAlert(!showAlert)
  }

  let content;

  if (showAlert == false) {
    content = <p> Press the Button! </p>
  } else {
    content =
      <Alert.Root status="success">
        <Alert.Indicator />
        <Alert.Content>
          <Alert.Title>Success!</Alert.Title>
          <Alert.Description>
            Message from backend:
            <br></br>
            {JSON.stringify(data)}
          </Alert.Description>
        </Alert.Content>
        <CloseButton onClick={toggleShowAlert} pos="relative" top="-2" insetEnd="-2" />
      </Alert.Root>
  }

  return (
      <Box>
        <VStack>
          {err && <h2>{err}</h2>}

          <Button onClick={testBackEnd}>
            Test Backend
          </Button>

          {content}

          {isLoading && <h2>Loading...</h2>}

        </VStack>
      </Box>
  );
}