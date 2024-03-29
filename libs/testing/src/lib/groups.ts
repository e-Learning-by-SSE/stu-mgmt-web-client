import { GroupDto } from "@student-mgmt/api-client";

export const GROUP_1: GroupDto = {
	id: "b4f24e81-dfa4-4641-af80-8e34e02d9c4a",
	name: "Testgroup 1",
	isClosed: false,
	hasPassword: true,
	size: 2,
	members: [
		{
			userId: "a019ea22-5194-4b83-8d31-0de0dc9bca53",
			role: "STUDENT",
			username: "mmustermann",
			displayName: "Max Mustermann",
			matrNr: 123456,
			email: "max.mustermann@test.com"
		},
		{
			userId: "40f59aad-7473-4455-a3ea-1214f19b2565",
			role: "STUDENT",
			username: "hpeter",
			displayName: "Hans Peter",
			matrNr: 111111,
			email: "hans.peter@test.com"
		}
	]
};
