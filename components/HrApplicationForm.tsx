"use client";

import { useState } from "react";
import { ToastButton } from "@/components/Toast";

const SUBJECTS = [
    "English", "Urdu", "Mathematics", "Biology", "Physics", "Chemistry",
    "Computer Science", "Islamic Studies", "Education", "International Relations",
    "Statistics", "Fine Arts", "Accounting", "Economics", "Business Studies",
    "Zoology", "Information Technology", "Arabic", "Botany",
    "Health & Physical Education", "History", "Pakistan Studies", "Psychology",
    "Mass Communication", "Political Science", "Finance", "Library Science",
];

const POST_OPTIONS = [
    "Vice Principal", "Section Head / Head Master or Mistress", "Deputy Section Head",
    "Coordinator", "Teacher", "Sports Teacher", "Arts Teacher", "Music Teacher",
    "Clerical Post",
];

const TEACHING_INSTITUTIONS = [
    "APSAC System", "Beaconhouse", "The City School", "Roots Millennium School",
    "Lahore Grammar School", "Allied School", "Bloomfield Hall School",
    "No Experience / Fresher", "Other",
];

const QUALIFICATIONS = ["PhD", "MPhil", "M.A / MSc", "BS (Hons)", "B.A / BSc", "Pharm-D", "ADP", "Other"];
const EXPERIENCE_OPTIONS = ["Fresher", "Less than 1 year", "2-3 years", "3-5 years", "More than 5 years"];
const ADMINISTRATIVE_ROLES = ["Principal", "Vice Principal", "Head Master / Mistress", "Head of Department", "Coordinator"];

export default function HrApplicationForm() {
    const [teachingInstitution, setTeachingInstitution] = useState("");
    const [qualification, setQualification] = useState("");

    return (
        // This application emails will be sent to gakhrn@gmail.com
        <form className="form">
            <div className="frow">
                <div className="field">
                    <label>Name of the Candidate (in block letters) <span className="req">*</span></label>
                    <input name="candidateName" required />
                </div>
                <div className="field">
                    <label>Father Name <span className="req">*</span></label>
                    <input name="fatherName" required />
                </div>
            </div>

            <div className="frow">
                <div className="field">
                    <label>Gender <span className="req">*</span></label>
                    <select name="gender" defaultValue="" required>
                        <option value="" disabled>Choose</option>
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                </div>
                <div className="field">
                    <label>Date of Birth <span className="req">*</span></label>
                    <input type="date" name="dateOfBirth" required />
                </div>
            </div>

            <div className="frow">

                <div className="field">
                    <label>Email Address <span className="req">*</span></label>
                    <input name="email" type="email" required />
                </div>

                <div className="field">
                    <label>Qualification (Final Degree) <span className="req">*</span></label>
                    <select
                        name="qualification"
                        value={qualification}
                        onChange={(event) => setQualification(event.target.value)}
                        required
                    >
                        <option value="" disabled>Choose</option>
                        {QUALIFICATIONS.map((option) => <option key={option}>{option}</option>)}
                    </select>
                    {qualification === "Other" && (
                        <input className="conditional-other" name="otherQualification" placeholder="Enter qualification" required />
                    )}
                </div>

            </div>

            <div className="frow">
                <div className="field">
                    <label>Subject of Final Degree <span className="req">*</span></label>
                    <select name="subject" defaultValue="" required>
                        <option value="" disabled>Choose</option>
                        {SUBJECTS.map((subject) => <option key={subject}>{subject}</option>)}
                    </select>
                </div>
                <div className="field">
                    <label>Marital Status <span className="req">*</span></label>
                    <select name="maritalStatus" defaultValue="" required>
                        <option value="" disabled>Choose</option>
                        <option>Unmarried</option>
                        <option>Married</option>
                        <option>Divorced</option>
                    </select>
                </div>
            </div>

            <div className="frow">
                <div className="field">
                    <label>Present Employment Status <span className="req">*</span></label>
                    <select name="employmentStatus" defaultValue="" required>
                        <option value="" disabled>Choose</option>
                        <option>Employed</option>
                        <option>Unemployed</option>
                    </select>
                </div>
                <div className="field">
                    <label>Teaching Experience (Institution) <span className="req">*</span></label>
                    <select
                        name="teachingInstitution"
                        value={teachingInstitution}
                        onChange={(event) => setTeachingInstitution(event.target.value)}
                        required
                    >
                        <option value="" disabled>Choose</option>
                        {TEACHING_INSTITUTIONS.map((option) => <option key={option}>{option}</option>)}
                    </select>
                    {teachingInstitution === "Other" && (
                        <input className="conditional-other" name="otherInstitution" placeholder="Enter institution" required />
                    )}
                </div>
            </div>

            <div className="frow">
                <div className="field">
                    <label>Teaching Experience Duration <span className="req">*</span></label>
                    <select name="teachingDuration" defaultValue="" required>
                        <option value="" disabled>Choose</option>
                        {EXPERIENCE_OPTIONS.map((option) => <option key={option}>{option}</option>)}
                    </select>
                </div>
                <div className="field">
                    <label>Administrative Experience <span className="req">*</span></label>
                    <select name="administrativeExperience" defaultValue="" required>
                        <option value="" disabled>Choose</option>
                        {ADMINISTRATIVE_ROLES.map((option) => <option key={option}>{option}</option>)}
                    </select>
                </div>
            </div>

            <div className="frow">
                <div className="field">
                    <label>Experience Duration <span className="req">*</span></label>
                    <select name="experienceDuration" defaultValue="" required>
                        <option value="" disabled>Choose</option>
                        {EXPERIENCE_OPTIONS.map((option) => <option key={option}>{option}</option>)}
                    </select>
                </div>
                <div className="field">
                    <label>Professional Trainings Attended <span className="req">*</span></label>
                    <input name="professionalTraining" required />
                    <p className="field-help">Mention &quot;Nil&quot; in case no training session / course attended.</p>
                </div>
            </div>

            <div className="frow">
                <div className="field">
                    <label>Mobile / Landline Number <span className="req">*</span></label>
                    <input name="mobile" type="tel" required />
                </div>
                <div className="field">
                    <label>WhatsApp Number <span className="req">*</span></label>
                    <input name="whatsapp" type="tel" required />
                </div>
            </div>

            <div className="field">
                <label>Application for the Post of <span className="req">*</span></label>
                <div className="choices">
                    {POST_OPTIONS.map((option) => (
                        <label key={option}>
                            <input type="checkbox" name="post" value={option} /> {option}
                        </label>
                    ))}
                    <label>
                        <input type="checkbox" name="post" value="Other" /> Other:
                        <input className="choice-other" name="otherPost" />
                    </label>
                </div>
            </div>

            <div className="field">
                <label>Postal Address <span className="req">*</span></label>
                <textarea name="postalAddress" required />
            </div>

            <ToastButton type="button" msg="Application received — our HR team will be in touch." className="btn-submit">
                Submit application
            </ToastButton>
        </form>
    );
}
