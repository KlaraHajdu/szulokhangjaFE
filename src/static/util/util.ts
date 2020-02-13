import moment from "moment";

export function apiPost(url: string, data: any, callback: any): void {
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(jsonresponse => {
      callback(jsonresponse);
    });
}

export function apiGet(url: string, callback: any): void {
  fetch(url, {
    method: "GET"
  })
    .then(response => response.json())
    .then(jsonresponse => {
      callback(jsonresponse);
    });
}

export function formatTimeStamp(timeStamp: string) {
  return moment(timeStamp);
}

export const parentPostsRoute: string = "http://localhost:60680/api/parent/";
export const teacherRecPostsRoute: string = "http://localhost:60680/api/teacherrec/";
export const teacherSalPostsRoute: string = "http://localhost:60680/api/teachersal/";
