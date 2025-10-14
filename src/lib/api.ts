// Why: API 통신을 위한 기본 설정과 공통 함수들을 제공
// What: HTTP 클라이언트와 API 엔드포인트 관리
// How: fetch API를 사용한 HTTP 클라이언트 구현

const API_BASE_URL = "https://fac3888966e6.ngrok-free.app/api";

// HTTP 메서드 타입 정의
type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

// API 에러 데이터 타입 정의
export interface ApiErrorData {
  message: string;
  status: number;

  details?: unknown;
}

// HTTP 요청 설정 타입
interface RequestConfig {
  method: HttpMethod;
  body?: unknown;
  headers?: Record<string, string>;
}

// API 클라이언트 클래스
class ApiClient {
  private readonly baseUrl: string;

  constructor(baseUrl: string = API_BASE_URL) {
    this.baseUrl = baseUrl;
  }

  // 공통 요청 함수
  private async request<T>(
    endpoint: string,
    config: RequestConfig
  ): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    const { method, body, headers = {} } = config;

    const requestInit: RequestInit = {
      method,
      headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "69420",
        ...headers,
      },
    };

    if (body && method !== "GET") {
      requestInit.body = JSON.stringify(body);
    }

    try {
      const response = await fetch(url, requestInit);

      if (!response.ok) {
        await this.handleErrorResponse(response);
      }

      return await response.json();
    } catch (error) {
      this.handleRequestError(error);
    }
  }

  // 에러 응답 처리
  private async handleErrorResponse(response: Response): Promise<never> {
    const errorData = await response.json().catch(() => ({}));
    throw new ApiError({
      message: errorData.message || `HTTP ${response.status}`,
      status: response.status,
      details: errorData,
    });
  }

  // 요청 에러 처리
  private handleRequestError(error: unknown): never {
    if (error instanceof ApiError) {
      throw error;
    }

    throw new ApiError({
      message: error instanceof Error ? error.message : "Unknown error",
      status: 0,
      details: error,
    });
  }

  // GET 요청
  async get<T>(endpoint: string, headers?: Record<string, string>): Promise<T> {
    return this.request<T>(endpoint, { method: "GET", headers });
  }

  // POST 요청
  async post<T>(
    endpoint: string,
    body?: unknown,
    headers?: Record<string, string>
  ): Promise<T> {
    return this.request<T>(endpoint, { method: "POST", body, headers });
  }

  // PUT 요청
  async put<T>(
    endpoint: string,
    body?: unknown,
    headers?: Record<string, string>
  ): Promise<T> {
    return this.request<T>(endpoint, { method: "PUT", body, headers });
  }

  // DELETE 요청
  async delete<T>(
    endpoint: string,
    headers?: Record<string, string>
  ): Promise<T> {
    return this.request<T>(endpoint, { method: "DELETE", headers });
  }

  // PATCH 요청
  async patch<T>(
    endpoint: string,
    body?: unknown,
    headers?: Record<string, string>
  ): Promise<T> {
    return this.request<T>(endpoint, { method: "PATCH", body, headers });
  }
}

// API 클라이언트 인스턴스 생성
export const apiClient = new ApiClient();

// API 에러 클래스
export class ApiError extends Error {
  public status: number;
  public details?: unknown;

  constructor({ message, status, details }: ApiErrorData) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.details = details;
  }
}
