interface UseApiProps {
    url: string;
    method: 'GET' | 'POST' | 'PUT' | 'DELETE';
    body?: any;
}

export default function useApi({ url, method, body }: UseApiProps) {

    const api = async (args: UseApiProps) => {
        const { url, method, body } = args;

        try {
            const res = await fetch(`/api/proxy?url=${url}`, {
                method,
                body: body ? JSON.stringify(body) : undefined,
            });

            return res.json();
        } catch (error) {
            // 401 에러 시에 로그인으로 라우팅?
            console.error(error);
            throw error;
        }   
    }

    return {
        api
    }
}