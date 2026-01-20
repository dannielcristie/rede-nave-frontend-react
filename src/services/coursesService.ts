import { api } from "./api";

export interface Category {
    id: string;
    name: string;
    slug: string;
}

export interface Instructor {
    name: string;
    bio?: string;
    avatar_url?: string;
}

export interface Lesson {
    id: string;
    title: string;
    slug: string;
    video_duration_seconds: number;
    is_preview: boolean;
    order: number;
    video_url?: string; // Only present if access granted
    content?: string;
}

export interface Module {
    id: string;
    title: string;
    order: number;
    lessons: Lesson[];
}

export interface Course {
    id: string;
    title: string;
    slug: string;
    description: string;
    thumbnail_url: string;
    duration_minutes: number;
    level: "beginner" | "intermediate" | "advanced";
    instructor: Instructor;
    category: Category;
    modules?: Module[];
}

export interface Enrollment {
    status: "active" | "completed" | "in_progress";
    progress: number; // percentage 0-100
    completed_lessons: number;
    total_lessons: number;
    enrolled_at: string;
    last_accessed_at?: string;
}

export interface EnrolledCourse extends Course {
    enrollment: Enrollment;
}

class CoursesService {
    async listCourses(): Promise<Course[]> {
        const response = await api.get("/courses");
        return response.data;
    }

    async getCourse(slug: string): Promise<Course> {
        const response = await api.get(`/courses/${slug}`);
        return response.data;
    }

    async getLesson(id: string): Promise<Lesson> {
        const response = await api.get(`/lessons/${id}`);
        return response.data;
    }

    async listMyCourses(): Promise<EnrolledCourse[]> {
        const response = await api.get("/courses/my-courses");
        return response.data;
    }
}

export const coursesService = new CoursesService();
