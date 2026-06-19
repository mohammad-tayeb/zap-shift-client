import { useNavigate } from "react-router";
import { ShieldAlert } from "lucide-react";

export default function ForbiddenPage() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center px-4">
      <div className="card w-full max-w-md bg-base-100 shadow-xl border border-base-300">
        
        <div className="card-body items-center text-center space-y-4">
          
          {/* Icon */}
          <div className="text-error">
            <ShieldAlert size={64} />
          </div>

          {/* Error Code */}
          <h1 className="text-5xl font-bold text-error">403</h1>

          {/* Title */}
          <h2 className="text-2xl font-semibold">
            Access Forbidden
          </h2>

          {/* Message */}
          <p className="text-base-content/70">
            You don’t have permission to access this page.
            If you think this is a mistake, contact the administrator.
          </p>

          {/* Actions */}
          <div className="card-actions justify-center mt-4">
            <button
              className="btn btn-primary text-secondary"
              onClick={() => navigate("/")}
            >
              Go Home
            </button>

            <button
              className="btn btn-outline"
              onClick={() => navigate(-1)}
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}