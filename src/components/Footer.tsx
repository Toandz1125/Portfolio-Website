import React from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Facebook,
  Youtube,
  Star,
  Send,
  Heart,
} from 'lucide-react';
import { useReviews } from './reviews/ReviewContext';
import LocationSection from './footer/LocationSection';
import { useLanguage } from '../contexts/LanguageContext';
import { useLikes } from '../contexts/LikeContext';

export default function Footer() {
  const { addReview } = useReviews();
  const { t } = useLanguage();
  const { likes, hasLiked, toggleLike } = useLikes();
  const [rating, setRating] = React.useState(5);
  const [comment, setComment] = React.useState('');
  const [name, setName] = React.useState('');
  const [error, setError] = React.useState('');
  const [success, setSuccess] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!name.trim() || !comment.trim()) {
      setError(t('footer.error.required'));
      return;
    }

    addReview({
      name: name.trim(),
      rating,
      comment: comment.trim(),
    });

    setSuccess(true);
    setName('');
    setComment('');
    setRating(5);

    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  };

  return (
    <footer className="bg-gray-700 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
          {/* Contact & Connect */}
          <div>
            <h3 className="text-xl font-semibold mb-6">
              {t('footer.contact')}
            </h3>
            <div className="space-y-4 mb-8">
              <a
                href="mailto:naithetoan2005@gmail.com"
                className="flex items-center gap-3 hover:text-blue-200 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>{t('footer.email')}</span>
              </a>
              <p className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                <span>{t('footer.phone')}</span>
              </p>
              <p className="flex items-center gap-3">
                <MapPin className="w-5 h-5" />
                <span>{t('footer.address')}</span>
              </p>
            </div>

            <div className="flex gap-6">
              <a
                href="https://github.com/Toandz1125"
                className="hover:text-blue-200 transition-colors"
                aria-label="Github"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/mai-to%C3%A0n/"
                className="hover:text-blue-200 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://www.facebook.com/maitoan0101"
                className="hover:text-blue-200 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://www.youtube.com/@maitoan1125"
                className="hover:text-blue-200 transition-colors"
                aria-label="Youtube"
              >
                <Youtube className="w-6 h-6" />
              </a>
            </div>

            {/* Like Section */}
            <div className="mt-8 flex items-center gap-4">
              <button
                onClick={toggleLike}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                  hasLiked
                    ? 'bg-red-500 hover:bg-red-600'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              >
                <Heart className={`w-5 h-5 ${hasLiked ? 'fill-white' : ''}`} />
                <span>{hasLiked ? t('footer.liked') : t('footer.like')}</span>
              </button>
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 fill-red-500 text-red-500" />
                <span className="text-lg font-semibold">{likes}</span>
              </div>
            </div>
          </div>

          {/* Location Section */}
          <LocationSection />

          {/* Review Form */}
          <div id="footer-review">
            <h3 className="text-xl font-semibold mb-6">{t('footer.review')}</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm mb-2">
                  {t('reviews.form.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 rounded bg-white/90 border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-gray-800"
                  required
                />
              </div>

              <div>
                <label className="block text-sm mb-2">
                  {t('reviews.form.rating')}
                </label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      className="focus:outline-none transition-transform hover:scale-110"
                    >
                      <Star
                        className={`w-6 h-6 ${
                          star <= rating
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="comment" className="block text-sm mb-2">
                  {t('reviews.form.comment')}
                </label>
                <textarea
                  id="comment"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="w-full px-4 py-2 rounded bg-white/90 border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-gray-800"
                  rows={4}
                  required
                />
              </div>

              {error && <p className="text-red-300 text-sm">{error}</p>}

              {success && (
                <p className="text-green-300 text-sm">
                  {t('reviews.form.success')}
                </p>
              )}

              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-700"
              >
                <Send className="w-4 h-4" />
                {t('reviews.form.submit')}
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-12 pt-8 text-center">
          <p className="text-gray-300">{t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
}
